
 $(document).ready(function(){
            var weapons=[
                {
                'name':'44_pistol',
                'damage':48,
                'firerate':6,
                'range':121,
                'accuracy':66,
                'weight':4.2,
                'value':99
               },
               {
                'name':'10mm_pistol',
                'damage':18,
                'firerate':46,
                'range':119,
                'accuracy':61,
                'weight':4.2,
                'value':53
               },
            
              {
                'name':'assault_rifle',
                'damage':30,
                'firerate':40,
                'range':153,
                'accuracy':72,
                'weight':13.1,
                'value':144
               }
            
                      ]
        //.........................................................................................................................
                
        //  TWO DIFFERENT WAYS TO ACCESS DICTIONARY VALUES
            //    console.log(weapons[1]['name'])
            //    console.log(weapons[1].name)
        
        //..........................................................................................................................
            $('.weapons').on('mouseenter',function(e){
                $('.weapons_stats').show()
            })

            $('.weapons').on('mouseleave',function(){
                $('.weapons_stats').hide()
            })

        //...........................................................................................................................    
        //METHOD 1  (SUPPLYING DISTINCT VALUES FOR EACH WEAPON)
            $('.weapons a').on('mouseenter',function(e){
                var current_item=$(e.currentTarget).attr('class')
                console.log(current_item)
                        
                        if (current_item=='44pistol'|| current_item=='44pistol active'){foo=0}
                        else if (current_item=='10pistol'|| current_item=='10pistol active'){foo=1}
                        else if (current_item=='rifle'|| current_item=='rifle active'){foo=2}
                        console.log(foo)

                        var a=['.damage','.firerate','.range','.accuracy','.weight','.value']
                        for (item in a){
                        $('.weapons_stats').find(a[item]).html(weapons[foo][(a[item]).replace('.','')])
                                        }    
            })  
        //............................................................................................................................

        //METHOD 2
            //   $('.44pistol').on('mouseenter',function(e){
            //      var a=['.damage','.firerate','.range','.accuracy','.weight','.value']
            //       for (item in a){
            //      $('.weapons_stats').find(a[item]).html(weapons[0][(a[item]).replace('.','')])
            //                      }
            //                                             })
            //   $('.10pistol').on('mouseenter',function(e){
            //      var a=['.damage','.firerate','.range','.accuracy','.weight','.value']
            //       for (item in a){
            //      $('.weapons_stats').find(a[item]).html(weapons[1][(a[item]).replace('.','')])
            //                      }
            //                                             })
                
            //    $('.rifle').on('mouseenter',function(e){
            //      var a=['.damage','.firerate','.range','.accuracy','.weight','.value']
            //       for (item in a){
            //      $('.weapons_stats').find(a[item]).html(weapons[2][(a[item]).replace('.','')])
            //                      }
            //                                             })                                         
        //................................................................................................................................
           //SELECTING A WEAPON
      ;

         $('.weapons a').on('click',function(e){
             $('.weapons a').removeClass('active');
             $(e.currentTarget).addClass('active')

         })

    //   ....................................................................................................................  //
    $('.navbar-toggler').on('click',function(e){
        $('#navbarNav').hide();
        $('.sidenav1').toggle();
      }) 


      $('html').on("click", function (e) {
        var el = $(e.target);
        var loo =   $('.doo');
  
        if (el.is(loo)) {
        } else {
          $(".sidenav1").hide();
        }
      });
  
 })