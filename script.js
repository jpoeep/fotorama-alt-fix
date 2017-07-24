// please for the love of god if u 

$(".fotorama").each(function() {
    var currentContainer = $(this)

    $(this).children("img").each(function(i) {
        var curImg = currentContainer.children("img")[i]

        // the new image will check whether or not each image exists
        var pathTest = new Image()
        pathTest.src = curImg.src

        // if the image cant load, it will be surrounded by a div container which fixes the issue
        pathTest.onerror = function() {
            var fix = $("<div></div>")
            fix.className = "fix"
            currentContainer.append(fix)
            fix.append(curImg)
        }

        // if for some reason an error got returned only because the image didn't load in time but later loads, this function deals with that
        pathTest.onload = function() {
            if(curImg.closest("div").className == "fix") {
                var div = curImg.closest("div")
                currentContainer.append(curImg)
                currentContainer.remove(div)
            }
        }
    })
})
