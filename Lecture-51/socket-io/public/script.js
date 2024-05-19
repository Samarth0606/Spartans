// connection establish
let socket = io();

$('#chat-box').hide();

// emit event
$('#send-btn').on('click' , ()=>{
    const msgText = $('#inp').val();
    // sending event -> emit
    if(!msgText){
        return
    }else{
        socket.emit('send-msg'  , {
            msg: msgText
        })
    }

    $('#inp').val("")
} )

socket.on('received-msg' , (data)=>{
    // console.log(data)
    $('#chat').append(`<li class="border p-3 rounded-pill">  <span class="fw-bold">${data.username} : ${data.msg}</span>  </li>`)
    
})


$('#login-btn').on('click' , ()=>{
    const username = $('#username').val();
    socket.emit('login' , {
        username:username
    })

    $('#login').hide();
    $('#chat-box').show();
    $('#username').val("")
})