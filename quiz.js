player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

    function send(){
        get_number = document.getElementById("sum").value;
        console.log("sum");
    
        charAt1 = sum.charAt(2);
        console.log(charAt1);
         length_divide_2 = Math.floor(sum.length/2);
          charAt2 = number.charAt(length_divide_2);
           console.log(charAt2);
    
          length_minus_1 = number.length - 1;
             charAt3 = number.charAt(length_minus_1);
              console.log(charAt3);

              remove_charAt1 = number.replace(charAt1,"X");
              console.log(remove_charAt3);
    
                   question_word = "<h4 id='sum_display'>Q."+remove_charAt1+"</h4>";
                    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
                     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
                      row = question_word + input_box + check_button;
                       document.getElementById("output").innerHTML = row;
                        document.getElementById("sum").value = "";
    }
