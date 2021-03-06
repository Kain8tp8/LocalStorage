const saveName: HTMLInputElement  = document.querySelector('#save_name')!
const saveValue: HTMLInputElement = document.querySelector('#save_value')!
const saveBtn: HTMLButtonElement   = document.querySelector('#save_btn')!

const readName: HTMLInputElement = document.querySelector('#read_name')!
const data: HTMLElement          = document.querySelector('#data')!
const readBtn: HTMLButtonElement = document.querySelector('#read_btn')!

saveBtn.onclick = () => {
    let name:string =saveName.value.trim()
    let value:string = saveValue.value.trim()

    if (name === ''||value === '') {
        alert('Do`ldir!!')
        return
    }

    localStorage.setItem(name ,value)
    alert('Saqlandi!')

    //bosatish:
    saveName.value = ''
    saveValue.value = ''
}

readBtn.onclick = () => {
    let name = readName.value.trim()

    if(name === '') {
        alert('Do`dir!')
        return
    }

    let value = localStorage.getItem(name)

    if(value === null){
        alert('Malumat yoq!')
        return
    }

    data.innerText = value
}