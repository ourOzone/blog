const main_container = document.getElementById("main_container");

function load_intro_page() {
    main_container.innerHTML = ""

    const header = document.createElement("header");
    header.className = "intro_header";
    header.textContent = "고민재의 블로그에요 초안이라 조금 조잡해요";

    const login_button = document.createElement("button");
    login_button.className = "login_button";
    login_button.textContent = "로그인을 해요";
    login_button.onclick = load_login_page ;

    main_container.append(header);
    main_container.append(login_button);

}

function load_login_page() {
    main_container.innerHTML = ""
    
    const header = document.createElement("header");
    header.className = "login_header";
    header.textContent = "로그인 페이지에요";

    const form = document.createElement("form");
    form.className = "login_form";

    const id_input = document.createElement("input");
    id_input.placeholder = "아이디를 입력해요";

    const pw_input = document.createElement("input");
    pw_input.placeholder = "비밀번호를 입력해요";

    const sign_button = document.createElement("button");
    sign_button.textContent = "로그인해요";
    sign_button.onclick = temp;
    sign_button.type = "button";

    form.append(id_input);
    form.append(pw_input);
    form.append(sign_button);

    main_container.append(header);
    main_container.append(form);
}
function temp() {
    location.href = 'write_page.html';
}

load_intro_page();
