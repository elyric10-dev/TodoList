//OPEN HEADER DRAWER
const header_drawer_container = document.querySelector('.header_drawer_container')
const close_header_drawer_popup_option_container = document.querySelector('.close_header_drawer_popup_option_container')
const header_drawer_popup_option_container = document.querySelector('.header_drawer_popup_option_container')

header_drawer_container.addEventListener('click', open_header_option)

function open_header_option() {
    header_drawer_container.classList.add('active')
    if (header_drawer_container.classList.contains('active')) {
        close_header_drawer_popup_option_container.style.display = "grid"
        header_drawer_popup_option_container.style.display = "grid"
    }
}
//CLOSE HEADER DRAWER
close_header_drawer_popup_option_container.addEventListener('click', close_header_option)

function close_header_option() {
    header_drawer_container.classList.remove('active')
    if (header_drawer_container.classList.contains('active')) {

    } else {
        close_header_drawer_popup_option_container.style.display = "none"
        header_drawer_popup_option_container.style.display = "none"
    }
}

//CLICK TO SYNC ANIMATION
const sync_animation = document.querySelector('.sync_animation')
const loading_line_animation = document.querySelector('.loading_line_animation')
sync_animation.addEventListener('click', sync_now)

function refresh_sync() {
    setTimeout(() => {
        loading_line_animation.classList.remove('reload')
        console.log('successful')
    }, 1500)
}

function sync_now() {
    loading_line_animation.classList.add('reload')
    refresh_sync();
}

//SHOW AND HIDE GRID COUNT
const grid_list_count = document.querySelectorAll('.grid_list_count')
const grid_count = document.querySelector('.grid_count')
grid_count.addEventListener('click', () => {


    if (grid_count.classList.contains('active')) {
        grid_count.classList.remove('active')
        grid_list_count.forEach((item) => {
            item.style.display = "none"
        })
    } else {
        grid_count.classList.add('active')
        grid_list_count.forEach((item) => {
            item.style.display = "grid"
        })
    }
})

//SAVE COLOR LABEL DIRECTLY
const grid_color_title1 = document.querySelector('.grid_color_title1')
const grid_color_title2 = document.querySelector('.grid_color_title2')
const grid_color_title3 = document.querySelector('.grid_color_title3')
const grid_color_title4 = document.querySelector('.grid_color_title4')
const grid_color_title5 = document.querySelector('.grid_color_title5')
const grid_color_title6 = document.querySelector('.grid_color_title6')
const grid_color_title7 = document.querySelector('.grid_color_title7')
const grid_color_title8 = document.querySelector('.grid_color_title8')
const grid_color_title9 = document.querySelector('.grid_color_title9')
const grid_color_title10 = document.querySelector('.grid_color_title10')

const typed_title1 = document.querySelector('.typed_title1')
const typed_title2 = document.querySelector('.typed_title2')
const typed_title3 = document.querySelector('.typed_title3')
const typed_title4 = document.querySelector('.typed_title4')
const typed_title5 = document.querySelector('.typed_title5')
const typed_title6 = document.querySelector('.typed_title6')
const typed_title7 = document.querySelector('.typed_title7')
const typed_title8 = document.querySelector('.typed_title8')
const typed_title9 = document.querySelector('.typed_title9')
const typed_title10 = document.querySelector('.typed_title10')

const edit_title = document.querySelector('.edit_title')

edit_title.addEventListener('click', () => {
    if (edit_title.classList.contains('active')) {
        edit_title.classList.remove('active')
        typed_title1.classList.remove('active')
        typed_title2.classList.remove('active')
        typed_title3.classList.remove('active')
        typed_title4.classList.remove('active')
        typed_title5.classList.remove('active')
        typed_title6.classList.remove('active')
        typed_title7.classList.remove('active')
        typed_title8.classList.remove('active')
        typed_title9.classList.remove('active')
        typed_title10.classList.remove('active')
        saveColorLabelDirectly()
    } else {
        edit_title.classList.add('active')
        typed_title1.classList.add('active')
        typed_title2.classList.add('active')
        typed_title3.classList.add('active')
        typed_title4.classList.add('active')
        typed_title5.classList.add('active')
        typed_title6.classList.add('active')
        typed_title7.classList.add('active')
        typed_title8.classList.add('active')
        typed_title9.classList.add('active')
        typed_title10.classList.add('active')

    }
})

function saveColorLabelDirectly() {

    grid_color_title1.innerHTML = typed_title1.value
    grid_color_title2.innerHTML = typed_title2.value
    grid_color_title3.innerHTML = typed_title3.value
    grid_color_title4.innerHTML = typed_title4.value
    grid_color_title5.innerHTML = typed_title5.value
    grid_color_title6.innerHTML = typed_title6.value
    grid_color_title7.innerHTML = typed_title7.value
    grid_color_title8.innerHTML = typed_title8.value
    grid_color_title9.innerHTML = typed_title9.value
    grid_color_title10.innerHTML = typed_title10.value


}

//OPENING COLOR GRID
const close_grid_box_popup_option_container = document.querySelector('.close_grid_box_popup_option_container')
const color_types_container = document.querySelector('.color_types_container')

color_types_container.addEventListener('click', () => {
    if (color_types_container.classList.contains('active')) {
        color_types_container.classList.remove('active')
        close_grid_box_popup_option_container.style.display = "none"
    } else {
        color_types_container.classList.add('active')
        close_grid_box_popup_option_container.style.display = "grid"
    }
})

//CLOSING COLOR GRID
close_grid_box_popup_option_container.addEventListener('click', () => {
    close_grid_box_popup_option_container.style.display = "none"
    color_types_container.classList.remove('active')
})