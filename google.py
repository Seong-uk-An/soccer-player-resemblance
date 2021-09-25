from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import urllib.request

driver = webdriver.Chrome()
driver.get("https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl")
elem = driver.find_element_by_name("q")
elem.send_keys("xhaka face,lacazette face,aubameyang face,nicolas pepe face,berrelin face,ederson face,kyle walker face,ruben diaz face,zinchenco face,cancelo face,grealish face,kdb face,phil foden face,sterling face,gabriel jesus face,alisson becker face,van dijk face,robertson face,alexander-arnold face,james milner face,jordan henderson face,thiago alcantara face,firmino face,salah face,sadio mane face,origi face,ter stegen face,pique face,jordi alba face,umtiti face,busquets face,coutinho face,de jong face,ousmane dembele face,memphis depay face,sergio aguero face,courtios face,carvajar face,alaba face,marcelo face,kroos face,modric face,isco face,camavinga face,eden hazard face,benzema face,asensio face,bale face,vinicious jr face,oblak face,tripper face,koke face,marcos llorente face,joao felix face,griezmann face,suarez face,darmian face,vidal face,eriksen face,alexis sanchez face,dzeko face,bakayoko face,giroud face,zlatan face,morata face,chiellini face,de ligt face,danilo face,cuardrado face,sandro face,bonnuci face,arthur melo face,aaron ramsey face,federico chiesa face,dybala face,keylor navas face,hakimi face,ramos face,verratti face,di maria face,mbappe face,icardi face,neymar face,messi face,hummels face,reus face,erling haaland face,neuer face,upamecano face,niklas sule face,alphonso davies face,kimmich face,goretzka face,gnabry face,lewandowski face,leroy sane face,thomas muller face")
elem.send_keys(Keys.RETURN)

SCROLL_PAUSE_TIME = 1.2

# Get scroll height
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
    time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        try:
            driver.find_element_by_css_selector(".mye4qd").click()
        except:
            break
    last_height = new_height

images = driver.find_elements_by_css_selector(".rg_i.Q4LuWd")
count = 1
for image in images:
    try:
        image.click()
        time.sleep(2)
        imgUrl = driver.find_element_by_xpath(
            "/html/body/div[2]/c-wiz/div[3]/div[2]/div[3]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div[2]/div[1]/a/img").get_attribute("src")
        urllib.request.urlretrieve(imgUrl, str(count) + ".jpg")
        count += 1
    except:
        pass
driver.close()
