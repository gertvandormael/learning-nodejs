// Starts websocket connection
const socket = io()

// Elements
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = $messageForm.querySelector("input")
const $messageFormButton = $messageForm.querySelector("button")
const $sendLocationButton = document.querySelector("#send-location")
const $messages = document.querySelector("#messages")
const $sidebar = document.querySelector("#sidebar")

// Templates
const messageTemplate = document.querySelector("#message-template").innerHTML
const locationMessageTemplate = document.querySelector("#location-message-template").innerHTML
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoScroll = () => {
  // New message element
  const $newMessage = $messages.lastElementChild

  // Height of the new message
  const newMessageStyles = getComputedStyle($newMessage)
  const newMessageMargin = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin


  const visibleHeight = $messages.offsetHeight
  const containerHeight = $messages.scrollHeight
  const scrollOffset = $messages.scrollTop + visibleHeight

  if (containerHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight
  }
}

socket.on("message", (message) => {
  console.log(message)
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("H:mm")
  })
  $messages.insertAdjacentHTML("beforeend", html)
  autoScroll()
})

socket.on("locationMessage", (message) => {
  console.log(message)
  const html = Mustache.render(locationMessageTemplate, {
    username: username,
    url: message.url,
    createdAt: moment(message.createdAt).format("H:mm")
  })
  $messages.insertAdjacentHTML("beforeend", html)
  autoScroll()
})

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room: room,
    users: users
  })

  $sidebar.innerHTML = html
})

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault()

  $messageFormButton.setAttribute("disabled", true)
  
  const message = e.target.elements.message.value

  socket.emit("sendMessage", message, (error) => {
    $messageFormButton.removeAttribute("disabled")
    $messageFormInput.value = ""
    $messageFormInput.focus()

    if (error) {
      return console.log(error)
    }

    console.log("The message was delivered!")
  })
})

$sendLocationButton.addEventListener("click", () => {
  $sendLocationButton.setAttribute("disabled", true)

  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.")
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit("sendLocation", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, () => {
      $sendLocationButton.removeAttribute("disabled")
      console.log("Your location is shared")
    })
  })
})

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error)
    location.href = "/"
  }
})