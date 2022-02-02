// alert($('.manual_player_img'))
function get_response(choice)
{
    images=['paper.png','scissor.png','stone.png']
    const random = Math.floor(Math.random() * images.length);
    pc_choice=images[random]
    $("#pc_player_img").attr('src',pc_choice)
    if (choice=='Scissor')
    {
        $('#manual_player_img').attr('src','scissor.png')
        human_choice='scissor.png'
    }
    else if (choice=='Rock/Stone')
    {
        $('#manual_player_img').attr('src','stone.png')
        human_choice='stone.png'
    }
    else if (choice=='Paper')
    {
        $('#manual_player_img').attr('src','paper.png')
        human_choice='paper.png'
    }

    if ((human_choice=='scissor.png' && pc_choice=='paper.png')||(human_choice=='paper.png' && pc_choice=='stone.png')||(human_choice=='stone.png' && pc_choice=='scissor.png'))
    {
        human_point=$('#human_point').text()
        $('#human_point').text(parseInt(human_point)+1)
    }  
    else if(human_choice==pc_choice)
    {
        human_point=$('#human_point').text()
        $('#human_point').text(parseInt(human_point))
        pc_point=$('#pc_point').text()
        $('#pc_point').text(parseInt(pc_point))
    } 
    else
    {
        pc_point=$('#pc_point').text()
        $('#pc_point').text(parseInt(pc_point)+1)
    }

    human_point=$('#human_point').text()
    human_point=parseInt(human_point)
    pc_point=$('#pc_point').text()
    pc_point=parseInt(pc_point)
    
    if(human_point==10)
    {
        alert('You win')
        $('#human_point').text(0)
        $('#pc_point').text(0)
    }
    else if(pc_point==10)
    {
        alert('PC Wins')
        $('#human_point').text(0)
        $('#pc_point').text(0)
    }

}
