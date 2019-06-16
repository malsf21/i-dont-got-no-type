import json
import os

# formats songs for the app
# note - translate uses python3 syntax, so run this with python3!

things_to_remove = dict.fromkeys(map(ord, '()[]"'), None)
output = ""
if (os.path.isfile("input.txt")):
    with open("input.txt") as f:
        words = f.read().split()
        for word in words:
            print(word)
            if not word[0] == '(' and not word[0] == '[' and not word[-1] == ')' and not word[-1] == ']':
                output += word.translate(things_to_remove) + " "
f= open("output.txt","w")
f.write(output)