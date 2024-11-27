$(document).ready
(            
    function()
    {         
        var deg_check_hepsi=true;                
        $(".check_head :checkbox").bind
        (
            "click",function()
            {
                deg_check_hepsi=this.checked;
                if(deg_check_hepsi==true) 
                {
                    $(".check_item :checkbox").attr('checked','checked');
                    $(".Grid_Row").css({backgroundColor:'#eaeaea'});
                }
                else 
                {
                    $(".check_item :checkbox").attr('checked','');
                    $('.Grid_Row:odd').css({backgroundColor: '#fbfafa'});
                    $('.Grid_Row:even').css({backgroundColor: '#ffffff'});                  
                }            
            }
        );
        $(".check_item :checkbox").bind
        (
            "click",check_tik
        )    
        function check_tik()
        {
            var index=-1;
            var secili=0;
            var deg_check_hepsi=true;
            $(".check_item :checkbox").each
            (
                function()
                {
                    index+=1;
                    if(this.checked==true)
                    {                                
                        $(this).parent().parent().parent().css({backgroundColor:'#eaeaea'});
                        secili+=1;
                    }
                    else
                    {
                        deg_check_hepsi=false;
                        if(index%2==0) $(this).parent().parent().parent().css({backgroundColor:'#ffffff'}); else $(this).parent().parent().parent().css({backgroundColor:'#fbfafa'});
                    }
                }
            )
            if(deg_check_hepsi==true)
            {
                $(".check_head :checkbox").attr('checked','checked');
                $(".Grid_Row").css({backgroundColor:'#eaeaea'});
            }
            else
            {
                 $(".check_head :checkbox").attr('checked','');
            }
            if(secili==0)
            {

            }
            else
            {

            }
            if(secili>1)
            {
                $(".ButtonKayitDuzenle").bind
                (
                    "click",function()
                    { 
                        alert('Lütfen düzenlemek istediğiniz bir kayıt seçiniz');return false;
                    }
                )
            }
        }  
