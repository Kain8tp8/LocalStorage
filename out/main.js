"use strict";
const saveName = document.querySelector('#save_name');
const saveValue = document.querySelector('#save_value');
const saveBtn = document.querySelector('#save_btn');
const readName = document.querySelector('#read_name');
const data = document.querySelector('#data');
const readBtn = document.querySelector('#read_btn');
saveBtn.onclick = () => {
    let name = saveName.value.trim();
    let value = saveValue.value.trim();
    if (name === '' || value === '') {
        alert('Do`ldir!!');
        return;
    }
    localStorage.setItem(name, value);
    alert('Saqlandi!');
    //bosatish:
    saveName.value = '';
    saveValue.value = '';
};
readBtn.onclick = () => {
    let name = readName.value.trim();
    if (name === '') {
        alert('Do`dir!');
        return;
    }
    let value = localStorage.getItem(name);
    if (value === null) {
        alert('Malumat yoq!');
        return;
    }
    data.innerText = value;
};
