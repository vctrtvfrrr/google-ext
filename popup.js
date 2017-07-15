function message(val) {
  $(".message").text(val)
}

$(document).ready(function() {
  // Set input to previously saved value
  chrome.storage.local.get("definedURL", function(result) {
    if (result.definedURL != undefined) {
      $(".urlinput").attr("placeholder", result.definedURL)
    } else {
      $(".urlinput").attr("placeholder", "type url here...")
    }
  })

  // Handle update
  $(".urlbutton").click(function() {
    $(".message").text($(".urlinput").val())
    chrome.storage.local.set({
      'definedURL': $(".urlinput").val()
    }, function() {
      // Notify that we saved.
      message('Settings saved')
    })
  })

  // Allow update when enter is pressed
  $('input').keypress(function(e) {
    if (e.which == 13) {
      $(".urlbutton").click()
      return false
    }
  })
})