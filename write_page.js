const writer = document.getElementById("writer");
const add_button = document.getElementById("adder");
add_button.onclick = add_new_block;

function add_new_block() {
    const block = document.createElement("div");
    block.textContent = "temp";
    writer.append(block);
}