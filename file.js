// ==UserScript==
// @name         Git-Phantom
// @namespace    http://tampermonkey.net/
// @GitHub       https://github.com/Git-Phantom
// @License      MIT
// @version      0.0.1
// @description  try to take over the world!
// @author       Git-Phantom
// @match        http://bloble.io/
// @grant        none
// ==/UserScript==

$(document).ready(function () {

    $(function removeADS() {
        $('#instructionsText, #youtuberOf, .adsbygoogle').remove()

        $(function UpdateADS() {
            var playersList = $("<div />", {
                id: 'playerList',
                style: 'color: white; font-size: 25px; background-color: rgba(100,100,100, 0.5); padding: 5px;'
            })

            var oltag = $("<ol />",{
                id: 'playersListOL',
            })
            var litag = $("<li />",{
                id: 'playersListLi',
                style: 'padding: 5px;',
                'v-for': 'todo in todos'
            })

            $("#adHolder").append(playersList)
            $("#playerList").append(oltag),
            $("#playersListOL").append(litag)
            $("#playersListLi").text(" {{ todo.text }} ")
        })
    })

    $(function theme() {
        $('#creatorLink .greyMenuText ').text("Git-Phantom V: 0.0.1")
        $('#darkener').css('background-image', 'url( https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/55401600-f926-47d1-b08a-27d0a81c7130/d2a8tjd-69cfbe3c-9ac1-465b-bc16-0d458599a6cb.jpg )')
        $('#darkener').css('background-repeat', 'no-repeat')
        $('#darkener').css('background-size', 'cover')

        var discord = $("<button />", {
            id: 'discordServer',
            href: 'http://google.com',
            type: 'button',
            onclick: "location.href='http://www.example.com'",
            style: 'margin-left: 20px; background-color: #29e53f; color: white; font-family: "regularF"; font-size: 26px; padding: 6px; border: none; border-radius: 4px; '
        })

        $('#userInfoContainer').append(discord)
        $('#discordServer').text('Discord Server')

        /*var def = $("<button />", {
            id: 'whiteTheme'
        })

        var dar = $("<buttom />", {
            id: 'darkTheme'
        })

        var vue = $("<buttom />", {
            id: 'vueTheme'
        })

        $("#menuContainer").append(def, dar, vue)
        $('#whiteTheme').text('White Theme')
        $('#darkTheme').text("Dark Theme")
        $('#vueTheme').text('Vue Theme')*/

/*
        $(function darkTheme() {
                backgroundColor = "rgb(15, 15, 15)",
                outerColor = "rgb(20, 20, 20)",
                redColor = "rgba(255, 0, 0, 0.8)";
        })

        $(function vueTheme() {

        })
*/
    })

    $(function application() {

        var tag = $("<div />", {
            id: 'phantomdiv',
            class: 'phantomd'
        })
        $("body").append(tag)

        var phantom = $("<script />", {
            id: 'phantom_js',
            class: 'js_phantom',
            src: 'https://rawcdn.githack.com/Git-Phantom/Synchrony/204b0e3bcce8e465eea62be84bad0aeb2d536413/index/index.js'
        })
        $("#phantomdiv").append(phantom)

    })

        $("#enterGameButton").click(function() {
            setTimeout(function(){
                $(function gamejs() {
                    var tag = $("<div />", {
                        onmouseout: 'toggleHoverUnit()',
                        id: 'unitItem9',
                        class: 'unitItem'
                    })

                    var img = $("<img />", {
                        id: 'unitItemIcon9',
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAFOklEQVR4Xu1bzW8bRRR/u2snTklbp+XDCnVbF9UoF2ikXoqEQCoXEB8HUOEErpREudGIP4DkziG9RUkkDCdAICFAVEhUioREL5USLokai9qtTWQKbaw6NG7s3eW9XTva9a69u/Z+xPKMtJfseGfeb97vNzPvvXDAGnAMA2AgkBMwT2AgqGLAPCFIECYnJ8/h+PP4yPjMLC0trQUl0r57QiqVig4MDJDxHzUZ/cXe3t6VdDpd8hsMX0GYmpq6ggbO4nPUzFBZlkscx80tLi4SSL41X0CYmJh4FY1L43NKa9ngCDEB4PG2YRo5SZIuLy8vr/iBhKcgTE9PnxZFkYx/RWuMMChD/A0Rnr0oKX/+6zoP+Z8FEB/rp4OesSIIwuWFhYWcl2B4AgLxPhwOz6LxH+smz8kQe1mCU2+LMHBYb9ZeGeDODwIUf+NRKg1gXK1Wq7Ne6YXrIKDqp9B44rSO99ExCc5cqsETo+3X9L8tgNvfhKC0gWBoGulFfRdJu+0VroFAvOd5nox/sZn3ifdEeOq86vp22z83ech+Kxj0AsFYw2fGTb3oGoQ67+dx9d9pxXs+bNd0fT+p2lovsOf3CPqMG3rRMQj1/Z62PHp0rv/0BRES7xp53xkUAKQX2e8EuHdDMFAEwb+K54v5bvSiIxCI9zgbEj7dlnf4NPL+AxGOJNStr12r3Ofgz69Vo557X4TIcevfPMxycPsrAco5vV7gJ3JIkTk8dXakF45AqO/3ZLxuy6P93i7vq48Atq4LcPcn/aqefFOE0YsihA9ZwQfQRi9WCAynemELhFZHXe1+b4f3xd95uPsjit0D82HJG+IIRuwlaxElvSj8gmBe40GuGb7n6AhuCwQ87s7i+nyqXaMnz6u8jxyzXrnSLQ7uoPEPM3o3DoVCyo9rtZruI0fO4lniLRGiz1tTpPJA1Yt/b+o9i+iKx+8569nZvEprQTg0KsHZD+3znlb+7xsGDkMikYB4PA7ovlAoFCCbzRrm+8wFCU4iGHb1IvOlAI+29sfyDgRaIeKvVaOVJ+7XdvU9o9EojI2NwdDQkO7F7u4ubGxsQKmkv0QKQ7JyvKZxrRrpDI1bb8GBcH+NV1S/mfeRSEQxfmRkpK0t29vbChiVSkXXb/CYrOwix8+11ovAQdjJq1ueGe8brm+1ktr3+XxeoYiZXhAYw3GjXgQOwh+fhQwAEOcJgIYAOgGB+uKlCXK5HBAg2nY0KcELn+jFlN4fKBCI98lkEoaHh53abdp/Z2cHNjc39/WiJ0AYHx+35L5TdEgrVldXlZ8xEBgIzBMYHZgmoA4wEBgI6mbKPIGBwDxh/2DJ6NCLdHD7AlUulyGTyfTWBarhw7FYTLlNdnOVJuOLxWJvXKUpj3Drc++DKnSDTKbM446BxxMaS+VVeI2CrWcuHfDwWnN8wGmglWKK6+vrvRFodRJyp2xTFtPsViF3sxAagUoh9wSm8+1kpShF51vIvbHiXiZfiPcU1j9QyZdWaTguJMOJ1yQ48boIoYh1wMzNNFwNI/KFawIUfvUpDdcwr1F76EZCVpuYaSRY3EjI4lwd10TaykU2r7GbqXkOZ0CqbzfVFnhqXgtGuyINJ3phTSKAVknXet1jMEUa2on3dblO8wr2deGWmV6YlfDZLeVpVZLTEyV8LfRCV9gBFsWcZsVZ9e/OdVuc1U57Otod7IgZ9enrsl4zvejbAu9mMPq61L9ZL8yKv1H4PC3iDkwT2g3c1//+Y1dU/ezn6e7gpyHdjMVAQPQYCAwElUTMExgIqif8D0mDe34m03XjAAAAAElFTkSuQmCC'
                    })

                    $("#unitList").append(tag)
                    $("#unitItem9").append(img)
                })
            }, 3000);
        })

        /*$(function gamejs() {
            var tag = $("<div />", {
                onmouseout: 'toggleHoverUnit()',
                id: 'unitItem9',
                class: 'unitItem'
            })

            var img = $("<img />", {
                id: 'unitItemIcon9',
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAFOklEQVR4Xu1bzW8bRRR/u2snTklbp+XDCnVbF9UoF2ikXoqEQCoXEB8HUOEErpREudGIP4DkziG9RUkkDCdAICFAVEhUioREL5USLokai9qtTWQKbaw6NG7s3eW9XTva9a69u/Z+xPKMtJfseGfeb97vNzPvvXDAGnAMA2AgkBMwT2AgqGLAPCFIECYnJ8/h+PP4yPjMLC0trQUl0r57QiqVig4MDJDxHzUZ/cXe3t6VdDpd8hsMX0GYmpq6ggbO4nPUzFBZlkscx80tLi4SSL41X0CYmJh4FY1L43NKa9ngCDEB4PG2YRo5SZIuLy8vr/iBhKcgTE9PnxZFkYx/RWuMMChD/A0Rnr0oKX/+6zoP+Z8FEB/rp4OesSIIwuWFhYWcl2B4AgLxPhwOz6LxH+smz8kQe1mCU2+LMHBYb9ZeGeDODwIUf+NRKg1gXK1Wq7Ne6YXrIKDqp9B44rSO99ExCc5cqsETo+3X9L8tgNvfhKC0gWBoGulFfRdJu+0VroFAvOd5nox/sZn3ifdEeOq86vp22z83ech+Kxj0AsFYw2fGTb3oGoQ67+dx9d9pxXs+bNd0fT+p2lovsOf3CPqMG3rRMQj1/Z62PHp0rv/0BRES7xp53xkUAKQX2e8EuHdDMFAEwb+K54v5bvSiIxCI9zgbEj7dlnf4NPL+AxGOJNStr12r3Ofgz69Vo557X4TIcevfPMxycPsrAco5vV7gJ3JIkTk8dXakF45AqO/3ZLxuy6P93i7vq48Atq4LcPcn/aqefFOE0YsihA9ZwQfQRi9WCAynemELhFZHXe1+b4f3xd95uPsjit0D82HJG+IIRuwlaxElvSj8gmBe40GuGb7n6AhuCwQ87s7i+nyqXaMnz6u8jxyzXrnSLQ7uoPEPM3o3DoVCyo9rtZruI0fO4lniLRGiz1tTpPJA1Yt/b+o9i+iKx+8569nZvEprQTg0KsHZD+3znlb+7xsGDkMikYB4PA7ovlAoFCCbzRrm+8wFCU4iGHb1IvOlAI+29sfyDgRaIeKvVaOVJ+7XdvU9o9EojI2NwdDQkO7F7u4ubGxsQKmkv0QKQ7JyvKZxrRrpDI1bb8GBcH+NV1S/mfeRSEQxfmRkpK0t29vbChiVSkXXb/CYrOwix8+11ovAQdjJq1ueGe8brm+1ktr3+XxeoYiZXhAYw3GjXgQOwh+fhQwAEOcJgIYAOgGB+uKlCXK5HBAg2nY0KcELn+jFlN4fKBCI98lkEoaHh53abdp/Z2cHNjc39/WiJ0AYHx+35L5TdEgrVldXlZ8xEBgIzBMYHZgmoA4wEBgI6mbKPIGBwDxh/2DJ6NCLdHD7AlUulyGTyfTWBarhw7FYTLlNdnOVJuOLxWJvXKUpj3Drc++DKnSDTKbM446BxxMaS+VVeI2CrWcuHfDwWnN8wGmglWKK6+vrvRFodRJyp2xTFtPsViF3sxAagUoh9wSm8+1kpShF51vIvbHiXiZfiPcU1j9QyZdWaTguJMOJ1yQ48boIoYh1wMzNNFwNI/KFawIUfvUpDdcwr1F76EZCVpuYaSRY3EjI4lwd10TaykU2r7GbqXkOZ0CqbzfVFnhqXgtGuyINJ3phTSKAVknXet1jMEUa2on3dblO8wr2deGWmV6YlfDZLeVpVZLTEyV8LfRCV9gBFsWcZsVZ9e/OdVuc1U57Otod7IgZ9enrsl4zvejbAu9mMPq61L9ZL8yKv1H4PC3iDkwT2g3c1//+Y1dU/ezn6e7gpyHdjMVAQPQYCAwElUTMExgIqif8D0mDe34m03XjAAAAAElFTkSuQmCC'
            })

            $("#unitList").append(tag)
            $("#unitItem9").append(img)
        })*/

})
