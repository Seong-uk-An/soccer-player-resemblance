from google_images_download import google_images_download

response = google_images_download.googleimagesdownload()
arguments = {"keywords" : "lacazette face,aubameyang face,nicolas pepe face,berrelin face,ederson face,kyle walker face,ruben diaz face,zinchenco face,cancelo face,grealish face,kdb face,phil foden face,sterling face,gabriel jesus face,alisson becker face,van dijk face,robertson face,alexander-arnold face,james milner face,jordan henderson face,thiago alcantara face,firmino face,salah face,sadio mane face,origi face,ter stegen face,pique face,jordi alba face,umtiti face,busquets face,coutinho face,de jong face,ousmane dembele face,memphis depay face,sergio aguero face,courtios face,carvajar face,alaba face,marcelo face,kroos face,modric face,isco face,camavinga face,eden hazard face,benzema face,asensio face,bale face,vinicious jr face,oblak face,tripper face,koke face,marcos llorente face,joao felix face,griezmann face,suarez face,darmian face,vidal face,eriksen face,alexis sanchez face,dzeko face,bakayoko face,giroud face,zlatan face,morata face,chiellini face,de ligt face,danilo face,cuardrado face,sandro face,bonnuci face,arthur melo face,aaron ramsey face,federico chiesa face,dybala face,keylor navas face,hakimi face,ramos face,verratti face,di maria face,mbappe face,icardi face,neymar face,messi face,hummels face,reus face,erling haaland face,neuer face,upamecano face,niklas sule face,alphonso davies face,kimmich face,goretzka face,gnabry face,lewandowski face,leroy sane face,thomas muller face,xhaka face",
             "limit": 95, "print_urls": True, "format": "jpg"}
paths = response.download(arguments)
print(paths)  
