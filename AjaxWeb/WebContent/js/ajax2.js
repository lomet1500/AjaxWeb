$(function(){
    //ajax 호출.
    $.ajax({
        url : '../data/MOCK_DATA.json',
        dataType: 'json',
        success: showContent,
        error: function(result){
            console.log('error = ' + result.statusText);
        }
    });
    //button 클릭 이벤트.
    $('#btn').on('click', function(){
        $('input:checked').parent().parent().remove()
    });
    //all_check 클릭 이벤트.(라이브 이벤트 방식)
    // $('body').on('click', '#all_check', function(){
    //     console.log('checked');
    //     // $('td > input').prop('checked', $('#all_check').is(":checked"));
    //     if ($('#all_check').is(":checked"))
    //         $('td > input').prop('checked', true);
    //     else
    //         $('td > input').prop('checked', false);
    // })
        $('body').on('click','#all_check',function(){
            if ($('#all_check').is(":checked"))
            $('td > input').prop('checked', true);
            else
            $('td > input').prop('checked', false);

        });

});

function showContent(result){
    console.log(result);
    let headers = ['chkbox','id','first_name','last_name','email'];
    let data = result;
    let table = $('<table id="tbl"/>').attr('border','1');
    let titles = $('<tr/>');
    let tr1 = $('<tr/>');
    
    for(field of headers) {
        if(field == 'chkbox'){
            let chkbox = $('<input/>').attr('type','checkbox').attr('id','all_check');
            td1 = $('<td/>').append(chkbox);
        }else{
            td1 = $('<th/>').html(field.replace().toUpperCase());           
        }
        titles.append(td1);
        
        // for(field in data[0]){
            //   let td1 = $('<th/>').html(field);
        //   console.log(data[0]);
     
            tr1.append(td1);
            table.append(tr1);
        
            }
            
    $(data).each(function(idx, obj){
        if(idx < 5) {
            let tr = $('<tr/>');
            $(tr).attr('id', obj.id);
            $(tr).on({
                    'mouseover': function(){
                        $(this).css('background-color','yellow')
                    },
                    'mouseout': function(){
                        $(this).css('background-color','')
                    }
                    });
                    //-->end
            for(field of headers){  //for(field in obj){
            let td = $('<td/>');
            if(field == 'chkbox'){
                let checkbox = $('<input/>')
                               .attr('type','checkbox');
                td.attr('align','center');
                td.append(checkbox);
                }else {
                    td.html(obj[field]);
                }

                tr.append(td);
            }

        table.append(tr);
        }  
    })
    $('#show').append(table);

    
}
