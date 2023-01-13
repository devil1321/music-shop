import base64, os
import json
import re
from django.contrib.auth.views import PasswordContextMixin
from django.http import JsonResponse
from django.shortcuts import render, HttpResponse,redirect
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from django.views.static import serve
from django.conf import settings
from .models import Track, Person
from django.contrib.auth import authenticate,login,logout
from django.core import serializers
# Create your views here.

class HomeView(TemplateView):
    template_name = "home.html"
    model = Track
    def get(self, request, *args, **kwargs):
        tracks = []
        for file in os.listdir(os.path.join(os.getcwd(),"media")):
            with open(os.path.join(os.getcwd(),"media/" + file), "rb") as music_file:
                encoded_string = base64.b64encode(music_file.read()).decode('utf-8')
                string = f'media/{file}'.format(file=file)
                string = re.sub(r' ',"_",string)
                track = self.model.objects.filter(file=string)
                if track.exists():
                     encoded_image = base64.b64encode(track[0].image.file.read()).decode('utf-8')
                     fileData = {
                         "id":track[0].id,
                         "base64":'data:audio/mpeg;base64,' + encoded_string,
                         "image":'data:image/jpeg;base64,' + encoded_image,
                         'title':track[0].title,
                         'author':track[0].author,
                         'genres':track[0].genres,
                         'tags':track[0].tags,
                     }
                     tracks.append(fileData)     
        return render(self.request,self.template_name,{ 'tracks':tracks,"user":self.request.user })

class ManageTracksView(TemplateView):
    template_name = 'manage-tracks.html'
    model = Track
    def get(self, request, *args, **kwargs):
        tracks = []
        for file in os.listdir(os.path.join(os.getcwd(),"media")):
            with open(os.path.join(os.getcwd(),"media/" + file), "rb") as music_file:
                encoded_string = base64.b64encode(music_file.read()).decode('utf-8')
                string = f'media/{file}'.format(file=file)
                string = re.sub(r' ',"_",string)
                track = self.model.objects.filter(file=string)
                if track.exists():
                     encoded_image = base64.b64encode(track[0].image.file.read()).decode('utf-8')
                     fileData = {
                         "id":track[0].id,
                         "base64":'data:audio/mpeg;base64,' + encoded_string,
                         "image":'data:image/jpeg;base64,' + encoded_image,
                         'title':track[0].title,
                         'author':track[0].author,
                         'genres':track[0].genres,
                         'tags':track[0].tags,
                     }
                     tracks.append(fileData) 
        if self.request.user.is_staff:    
            return render(self.request,self.template_name,{ 'tracks':tracks,"user":self.request.user })
        else:
            return render(self.request,'not-allow.html')

class FileView(TemplateView):
     template_name=""
     model = Track
     def post(self, request, *args, **kwargs):
         body = json.loads(request.body) 
         if self.request.user:
            for file in os.listdir(os.path.join(os.getcwd(),"media")):
               if file == body["params"]['name']:
                   name = body["params"]['name']
                   with open(os.path.join(os.getcwd(),"media/" + name), "rb") as music_file:
                       encoded_string = base64.b64encode(music_file.read()).decode('utf-8')
                       string = f'media/{file}'.format(file=file)
                       string = re.sub(r' ',"_",string)
                       track = self.model.objects.filter(file=string)
                       if track.exists():
                            encoded_image = base64.b64encode(track[0].image.file.read()).decode('utf-8')
                            fileData = {
                                "id":track[0].id,
                                "base64":'data:audio/mpeg;base64,' + encoded_string,
                                "image":'data:image/jpeg;base64,' + encoded_image,
                                'title':track[0].title,
                                'author':track[0].author,
                                'genres':track[0].genres,
                                'tags':track[0].tags,
                            }
                            return JsonResponse({"file":fileData})  
                       else:
                            return JsonResponse({"msg":'Track not exists'})  
         else:
             return JsonResponse({"msg":"file not found"})

class FilesView(TemplateView):
    template_name=""
    model = Track
    def get(self,request,*args,**kwargs):
        if self.request.user:           
            files = []
            for file in os.listdir(os.path.join(os.getcwd(),"media")):
                 with open(os.path.join(os.getcwd(),"media/" + file), "rb") as music_file:
                       encoded_string = base64.b64encode(music_file.read()).decode('utf-8')
                       string = f'media/{file}'.format(file=file)
                       string = re.sub(r' ',"_",string)
                       track = self.model.objects.filter(file=string)
                       if track.exists():
                            encoded_image = base64.b64encode(track[0].image.file.read()).decode('utf-8')
                            fileData = {
                                "base64":'data:audio/mpeg;base64,' + encoded_string,
                                "image":'data:image/jpeg;base64,' + encoded_image,
                                'title':track[0].title,
                                'author':track[0].author,
                                'genres':track[0].genres,
                                'tags':track[0].tags,
                            }
                            files.append(fileData)         
            return JsonResponse({"files":files})  
        else:
            return JsonResponse({"msf":'signin or login firts'})  
                      
    
class AddTrackView(TemplateView):
    template_name = 'manage-tracks.html'
    model = Track
    def post(self,request,*args,**kwargs):
        file = self.request.FILES.get('file')
        image = self.request.FILES.get('image')
        title = self.request.POST.get('title')
        author = self.request.POST.get('author')
        tags = self.request.POST.get('tags')
        genres = self.request.POST.get('genres')
        if self.request.user.is_staff:
            if self.model.objects.filter(title=title).exists():
                return JsonResponse({'msg':"Track is arleady on list"})
            else:
                modelToSave = self.model.objects.create(file=file,image=image,title=title,author=author,tags=tags,genres=genres)
                try:
                    modelToSave.save()
                    return JsonResponse({"msg":"Track added"})
                except:
                    return JsonResponse({'msg':'Fill file image and title'})
        else:
            return render(self.request,'not-allow.html')

            
class UpdateTrackView(TemplateView):
    template_name = 'manage-tracks.html'
    model = Track
    def post(self,request,*args,**kwargs):
        if self.request.user.is_staff:
            id = self.request.POST.get('id')
            file = self.request.FILES.get('file')
            image = self.request.FILES.get('image')
            title = self.request.POST.get('title')
            author = self.request.POST.get('author')
            tags = self.request.POST.get('tags')
            genres = self.request.POST.get('genres')
            track = self.model.objects.get(id=id)
            track.file = file
            track.image = image
            track.title = title
            track.author = author
            track.tags = tags
            track.genres = genres
            try:
                track.save()
                return JsonResponse({"msg":"Track Updated"})
            except:
                return JsonResponse({'msg':'Track Not Updated'})
        else:
            return render(self.request,'not-allow.html',{'user':self.request.user})

class DeleteTrackView(TemplateView):
    template_name = 'manage-tracks.html'
    model = Track
    def get(self,request,*args,**kwargs):
       
        if self.request.user.is_staff:
            track = self.model.objects.get(id=kwargs["id"])
            if track:
                try:
                    track.delete()
                    return redirect('manage-tracks')
                except:
                    return redirect('manage-tracks')
            else:
                  return redirect('manage-tracks')
        else:
            return render(self.request,'not-allow.html')
 
class ProfileView(TemplateView):
    template_name = 'profile.html'
    model = Person
    def get(self,request,*args,**kwargs):
        print(self.request.user)
        # user = self.model.objects.get(username = self.request.user.username)
        return render(self.request,'profile.html')   
     
class LoginView(TemplateView):
    template_name = 'login.html'
    def get(self,request,*args,**kwargs):
        return render(request,self.template_name)
    def post(self,request,*args,**kwargs):
        username = self.request.POST.get('username')
        password = self.request.POST.get('password_1')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            if self.request.user.is_authenticated:
                #  is_app = self.request['is_app']
                #  if is_app:
                #     return JsonResponse(serializers.serialize('json', [user]), safe=False)
                #  else:
                    return redirect('home')
            else:
                return render(request,self.template_name)
        else:
            if self.request.body['is_app']:
                return JsonResponse({'msg':'User is not authenticated'})
            else:
                return redirect('login')
                
        
class LogoutView(TemplateView):
    template_name=""
    def get(self,request,*args,**kwargs):
        logout(request)
        return redirect('login')
    def post(self,request,*args,**kwargs):
        logout(request)
        if self.request.user.is_authenticated:
            return JsonResponse({"user":self.request.user})
        else:
            return JsonResponse({'user':None})
    
class RegisterView(TemplateView):
    model = Person
    template_name = 'register.html'
    def get(self,request,*args,**kwargs):
        if self.request.user.is_authenticated:
            return redirect('home')
        else:
            return render(request,self.template_name)
    def post(self,request,*args,**kwargs):
        email = self.request.POST.get('email')
        username = self.request.POST.get('username')
        password_1 = self.request.POST.get('password_1')
        password_2 = self.request.POST.get('password_2')
        if password_1 == password_2:
            try:
                User = self.model.objects.create_user(username=username,email=email,password=password_1)
                User.save()
                return JsonResponse({'url':'gatsbyapp'})   
            except:
                return JsonResponse({'url':'user not created please send valid credentials or user is exists'})   
        else:
            return JsonResponse({'msg':'Passwords not match'})   

def Custom500View(request, *args, **argv):
    return render(request,'500.html',{"user":request.user},status=500)
   
def Custom404View(request, *args, **argv):
    return render(request,'404.html',{"user":request.user},status=404)
   


   
        