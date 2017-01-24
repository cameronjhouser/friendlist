var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');


var friendTemplate = "<tr>" + 
    "<td>{{name}}</td>" + 
    "<td>{{age}}</td>" +
    "<td><button id='{{id}}' class='remove'>X</button></td>"+
   "</tr>";



function addFriend(friend){
    $friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){

 
    $.ajax({
        type: 'GET',
        url: 'http://rest.learncode.academy/api/learncode/friends',

 
        success: function(friends) {

            $.each(friends, function(i, friend){
                addFriend(friend);  
            });

        },

        error: function(){
            alert('error loading friends');
        }   
    });

    $('#add-friend').on('click', function(){

        var friend = {
            name: $name.val(),
            age: $age.val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://rest.learncode.academy/api/learncode/friends',
            data: friend,
        success: function(newFriend){
                addFriend(newFriend);   
            },

            error: function(){
                alert('error saving order');
            }
        });

    });

 
    $friends.delegate('.remove', 'click', function(){

      var $li = $(this).closest('li');
        $.ajax({
            type: 'DELETE',

            url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
            success: function(){
  
                $li.fadeOut(300, function(){
                    $(this).remove();
                });
            }
        });
    });
});

