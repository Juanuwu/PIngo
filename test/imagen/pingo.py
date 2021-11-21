from PIL import Image, ImageFont, ImageDraw 
import os

abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)
my_image = Image.open('PINGO.png')
title_font = ImageFont.truetype('font/Insominia.ttf', 20)

title_text = "3407c298c06a945d03aadd6993bbfc0b2f5e0772070d5c4e05c13197ec8d14d0"
image_editable = ImageDraw.Draw(my_image)
image_editable.text((0,1900), title_text, (237, 230, 211), font=title_font)
my_image.save('result.png')

