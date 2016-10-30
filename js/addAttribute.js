
function allcheck(c1aabtn,c1aaMain){
    $(c1aabtn).click(function(){
        $(c1aabtn+" img").toggle();
        $(c1aaMain).toggle();
    });
}

function allCheckbox(checkAll,checkTr){
    $(checkAll).click(function(){
        if(this.checked){
            $("."+checkTr+" td input").prop("checked",true);
        }else{
            $("."+checkTr+" td input").prop("checked",false);
        }
    });
    $("."+checkTr+" input").click(function(){
        $("."+checkTr+" input").each(function(){
            if($("."+checkTr+" input[type='checkbox']:checked").not(checkAll1).length==$("."+checkTr+" td")){
                $(allcheck).attr("checked","true");
            }else{
                $(allcheck).attr("checked","false");
            }
        });
    });
}
