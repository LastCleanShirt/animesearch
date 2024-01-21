$(document).ready(function(){
    function search(query){
        $("#movie-list").html("")
        $.ajax({
            url: "https://api.jikan.moe/v4/anime?q=" + $("#search-input").val(),
            type: "get",    
            dataType: "json",
            success: function (result) {
                console.log(result);
                let animes = result.data;
                $.each(animes, function(i, data){
                    $("#movie-list").append(`
                    <div class="col-md-5 d-flex">
                        <div class="card   mb-2">
                            <img src="`+data.images.jpg.image_url+`" class="card-img-top" alt="..." style="max-width: 400px">
                                <div class="card-body">
                                    <h5 class="card-title">`+data.title+`</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.type+`</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">`+data.title_japanese+`</h6>
                                    
                                    <div class="buttons d-flex ">
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#`+i+`_synopsis">
                                        Read Synopsis
                                        </button>

                                        <div class="modal fade" id="`+i+`_synopsis" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLongTitle">Synopsis</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    `+data.synopsis+`
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="`+data.url+`" class="btn btn-primary" target="blank_" role="button">See more</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <style>
                        card-body {
                            background-color: rgb(243, 243, 243) !important;
                            font-size: 10px;
                        }

                        #movie-list {
                            max-width: 70%;
                            position: absolute;
                            left: 24%;
                        }
                        
                        .buttons {
                            width: 100%;
                            display: inline-block;
                            padding: 5px;
                        }

                        .buttons > * {
                            margin: 5px;
                        }

                        `)/*}
                        .card-text{
                            font-size:10px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        .card-title {
                            font-size:13px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        .card-subtitle{
                            font-size:13px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                        a{
                            width: 100px;   
                            height: 30px;
                            font-size: 10px !important;
                        }*/
                
                })
            }
        })
        $(".searchcontainer").css("padding-top", "0px")
        $(".animesearchtext").css("display", "none")
        $("body").css("background-image", "none")
        $("body").css("box-shadow", "rgb(185, 174, 174) 2px 2px 2px !important")
        $(".inputdiv").append(`
            <a href="./"><img src="Logo.png" type="image/png" class="logo"></a>
            <style>
                .logo {
                    width: 32px;
                    position: absolute;
                    right: 105%;
                }
        `)
        //document.getElementsByClassName("searchcontainer").setAttribute("style", "padding-top: 0px;")
    } 
    $('#search-button').on("click", function(){
        search($("#search-input").val());
    })
    $('#search-input').keypress(function(e){
        if(e.which == 13){
            search($("#search-input").val())
        }
    })
})
