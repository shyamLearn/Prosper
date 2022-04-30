from fileinput import close
import os
from pathlib import Path
import platform
import socket
from statistics import mode
import subprocess

from click import command

# os.system("")
# a=os.system("touch")
# cwd = os.getcwd()
# os.system('echo "test program"')
# os.system('ls')
# print(a)
path = "C:/Videos/"
host_name = socket.gethostname()
host_ip = socket.gethostbyname(host_name)
print("py terminal [Version 1.0 BETA]")
while True:
    code = input(">>>")
    if code == "ls":
        dir_list = os.listdir(path)
        print("Files and Directories in :", path)
        print(dir_list)
    if code == "echo":
        echo= input("What to echo: ")
        print(echo)
    if code == "mkdir":
        first = input("File Name: ")
        os.mkdir(path+first)
    if code == "rmdir":
        second = input("File Name: ")
        os.rmdir(path+second)
    if code == "touch":
        File = input("File Name: ")
        Path(path + File).touch()

        
        
   
