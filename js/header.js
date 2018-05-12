$('#contactForm').on('submit',function (event) {
    $.ajax({
        type:'POST',
        dataType:'json',
        url:'http://127.0.0.1:9090/mie/tempBlog/submitContact',
        data:$('#contactForm').serialize(),
        success:function(resp){
            if(resp.message==='success'){
                $('#sendModalContent').html('我已收到您的联系方式，我会尽快联系您。');
            }else{
                $('#sendModalContent').html(resp.result);
            }
            $('#sendModal').modal('show');
        },
        error:function () {
            $('#sendModalContent').html('网络异常');
            $('#sendModal').modal('show');
        }
    });
    return false;
});