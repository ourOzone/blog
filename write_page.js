const writer = document.getElementById("writer");
const add_button = document.getElementById("adder");
add_button.onclick = add_new_line;

id_cnt = 0
function add_new_line() {
    const line = document.createElement("div");
    line.className = "line"
    
    const menu = document.createElement("div");
    menu.className = "menu"

    const block_container = document.createElement("div");
    block_container.className = "block_container";


    id_cnt += 1;
    const line_id = "" + id_cnt;
    line.id = "" + line_id;
    const block_container_id = "b" + line_id;
    block_container.id = block_container_id;

    const txtButton = document.createElement("div");
    txtButton.className = "txtButton";
    txtButton.classList.add("menuButton");
    txtButton.textContent = "txt";
    txtButton.onclick = () => add_block(block_container_id, "text");

    const imgButton = document.createElement("div");
    imgButton.className = "imgButton";
    imgButton.classList.add("menuButton");
    imgButton.textContent = "img";

    const delButton = document.createElement("div");
    delButton.className = "delButton";
    delButton.classList.add("menuButton");
    delButton.textContent = "del";
    delButton.onclick = () => deleteLine(line_id);

    menu.append(txtButton);
    menu.append(imgButton);
    menu.append(delButton);

    line.append(menu);

    line.append(block_container);

    writer.append(line);
}

function add_block(id, type) {
    const mother_line = document.getElementById(id);
    const child_cnt = mother_line.childElementCount;
    const block_id = id + "t" + child_cnt;
    const block = document.createElement("div");
    block.className = "block";
    block.id = block_id;
    
    if (type == "text") {
        const text = createTextArea(block_id);
        block.append(text);
    }

    const line = document.getElementById(id);
    line.append(block);

}

function createTextArea (id) {
    const del = document.getElementById(id);
    const textArea = document.createElement("div");
    
    const txt = document.createElement("textarea");
    const writer = document.getElementById("writer");
    console.log(txt.offsetWidth, writer.offsetWidth);
    txt.style.width = "" + (writer.offsetWidth) + "px";
    const aliginButton = document.createElement("div");
    aliginButton.className = "aliginButton";
    aliginButton.classList.add("blockButton");
    aliginButton.textContent = "A";

    const delButton = document.createElement("div");
    delButton.className = "blockDelButton";
    delButton.classList.add("blockButton");
    delButton.textContent = "X";
    delButton.onclick = () => {
        del.remove();
    }

    const buttonConatainer = document.createElement("div");
    buttonConatainer.className = "buttonConatainer";
    buttonConatainer.append(aliginButton);
    buttonConatainer.append(delButton);

    textArea.append(txt);
    textArea.append(buttonConatainer);

    return textArea;

}


function submit_write() {
    const title = document.getElementById('title_input');
    const lines = document.getElementsByClassName("line");
    const linesArray = Array.from(lines);

    blocks_value = []

    linesArray.forEach((e) => {
        temp = []
        const block_container = e.children[1];
        const blocks = Array.from(block_container.children);

        blocks.forEach((e) => {
            const value = e.children[0].children[0].value;
            temp.push(value)
        })
        blocks_value.push(temp);
        
    });

    
    return [title.value, blocks_value];
}

function deleteLine (id) {
    const del = document.getElementById(id);
    del.remove();
}

