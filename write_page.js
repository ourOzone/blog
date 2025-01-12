const writer = document.getElementById("writer");
const add_button = document.getElementById("adder");
add_button.onclick = add_new_line;

id_cnt = 0
function add_new_line() {
    const line = document.createElement("div");
    line.className = "line"
    
    const menu = document.createElement("div");
    menu.className = "menu"
    menu.textContent = "여기에 메뉴바가 들어가요(글 수정모드, 너비/위치 조작모드, 블럭 추가, 라인 삭제)";

    id_cnt += 1;
    const line_id = "" + id_cnt;
    line.id = "" + line_id

    menu.onclick = () => add_block(line_id, "text");
    line.append(menu);


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
        const text = document.createElement("input");
        block.append(text);
    }

    const line = document.getElementById(id);
    line.append(block);

}