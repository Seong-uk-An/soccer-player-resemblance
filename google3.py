from google_images_download import google_images_download

response = google_images_download.googleimagesdownload()  # class instantiation

arguments = {"keywords": "박보영,아이유,윤승아,걸스데이 민아,한지민,안소희,오연서,한예슬,이성경,이효리,수지,트와이스 나연,여자친구 예린,카라 한승연,문채원,소녀시대 윤아,이연희,고아라,문근영,정유미,나인뮤지스 경리,있지 예지,모델 한혜진,헤이즈,티아라 지연",
             "limit": 50, "print_urls": True, "format": "jpg"}  # creating list of arguments
paths = response.download(arguments)  # passing the arguments to the function
print(paths)  # printing absolute paths of the downloaded images
