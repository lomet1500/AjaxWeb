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
    //버튼이벤트.
    $('#btn').click(addRow);
    //찾기 이벤트
    $('#findBtn').on('click', function(){
        let findId = $('#find_id').val();
        let findRow = $('#' + findId + '').css('background-color','gray');
    
    // 신규 row 생성
        let tr = makeNewTr();
        findRow.before(tr);
    });
});

function makeNewTr() {
    let inputs =  $('.input_val');
    let tr = $('<tr/>');
    $(tr).hover(function(){
        $(this).css('background-color','yellow');
    }, function() {
        $(this).css('background-color','red');
    });
    for(let i = 0; i<inputs.length; i++) {
        let td = $('<td/>').html(inputs[i].value);
        tr.append(td);
    }
    
    
    let tddel = $('<td/>');
    let btndel =$('<button/>').html('delete');
    $(btndel).click(trDeleteFunc);
    tddel.append(btndel);
    tr.append(tddel);
    
    return tr;
}
    function addRow() {
        let tr = makeNewTr();
        $('#tbl').append(tr); 
    }
    
    function btnFunc(){
        console.log($(this)); 
        let tr = $('<tr/>');
        let tdId = $('<td/>').html($('#id').val());
        let tdFirst = $('<td/>').html($('#first_name').val());
        let tdLast = $('<td/>').html($('#last_name').val());
        let tdEmail = $('<td/>').html($('#email').val());
        let trVal = $(tr).append(tdId,tdFirst,tdLast,tdEmail);
        $('#tbl').append(trVal);
    }
    


function showContent(result){
            console.log(result);
            let headers = ['id','first_name','last_name','email','delete'];
            let data = result;
            let table = $('<table id="tbl"/>').attr('border','1');
            let tr1 = $('<tr/>');
            
            for(field of headers) {
                let td1 = $('<th/>').html(field);
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
                    // -->tr event...
                    // $(tr).click(trToInputFunc);
                    // $(tr).mouseover(function(){
                    //     $(this).css('background-color','yellow')
                    // })
                    // $(tr).mouseout(function(){
                    //     $(this).css('background-color','')
                    // })
                    $(tr).on({
                        'click': trToInputFunc, 
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
                    
                    let btndel1 = $('<button/>').html('delete');
                    $(btndel1).click(trDeleteFunc);
                    $(td).append(btndel1);
                    $(tr1).append(td); 

                    td.html(obj[field]);
                    tr.append(td);
                    }
                table.append(tr);
                }  
            })
            $('#show').append(table);
}

function trToInputFunc(){
    console.log($(this).children().eq(0).html());
        $('#id').val($(this).children().eq(0).html());
        $('#first_name').val($(this).children().eq(1).html());
        $('#last_name').val($(this).children().eq(2).html());
        $('#email').val($(this).children().eq(3).html());
        
    
}

function trDeleteFunc(){
        $(this).parent().parent().remove();
}

    

