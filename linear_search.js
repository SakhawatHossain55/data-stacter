const friends = [12, 45, 67, 89, 412, 258, 963];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element == 89) {
        return i;
    }
}