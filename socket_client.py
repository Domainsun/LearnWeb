import socket

client = socket.socket()
client.connect(('192.168.0.139',8092))
while True:
    content=input("请输入要发送的内容:")
    if content.__len__()==0:
        continue
    client.send(content.encode())
    data=client.recv(1024)
    print(data.decode())

client.close()