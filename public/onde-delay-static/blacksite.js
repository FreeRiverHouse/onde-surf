(() => {
  const routeButtons = Array.from(
    document.querySelectorAll('.route-selector button'),
  )
  const signalRoute = document.querySelector('.signal-route')

  const renderRoute = (mode) => {
    if (!signalRoute || routeButtons.length !== 2) return

    const analogFirst = mode === 'analog'
    const nodes = signalRoute.querySelectorAll('.route-node')
    const firstName = nodes[0]?.querySelector('strong')
    const firstType = nodes[0]?.querySelector('small')
    const secondName = nodes[1]?.querySelector('strong')
    const secondType = nodes[1]?.querySelector('small')

    signalRoute.classList.toggle('route-analog', analogFirst)
    signalRoute.classList.toggle('route-digital', !analogFirst)
    routeButtons[0].classList.toggle('active', analogFirst)
    routeButtons[1].classList.toggle('active', !analogFirst)

    nodes[0]?.classList.toggle('warm', analogFirst)
    nodes[0]?.classList.toggle('cool', !analogFirst)
    nodes[1]?.classList.toggle('cool', analogFirst)
    nodes[1]?.classList.toggle('warm', !analogFirst)

    if (firstName) firstName.textContent = analogFirst ? 'ANALOG' : 'DIGITAL'
    if (firstType) {
      firstType.textContent = analogFirst ? 'VARIABLE BBD' : 'PRECISION PCM'
    }
    if (secondName) secondName.textContent = analogFirst ? 'DIGITAL' : 'ANALOG'
    if (secondType) {
      secondType.textContent = analogFirst ? 'PRECISION PCM' : 'VARIABLE BBD'
    }
  }

  routeButtons[0]?.addEventListener('click', () => renderRoute('analog'))
  routeButtons[1]?.addEventListener('click', () => renderRoute('digital'))

  const form = document.querySelector('.code-form')
  const field = document.querySelector('.code-field')
  const input = document.querySelector('#access-code')
  const button = form?.querySelector('button')
  const message = document.querySelector('#download-message')

  form?.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (!input || !button || !message) return

    field?.classList.remove('has-error')
    button.disabled = true
    button.firstChild.textContent = 'CHECKING'
    message.textContent = 'Verifying private release access…'

    try {
      const response = await fetch('/api/onde-delay-unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: input.value }),
      })

      if (!response.ok) throw new Error('invalid code')

      message.textContent = 'Access granted. Your download is starting.'
      window.location.assign('/download/onde-delay')
    } catch {
      field?.classList.add('has-error')
      button.disabled = false
      button.firstChild.textContent = 'UNLOCK DMG'
      message.textContent = 'Code not recognized. Check it and try again.'
    }
  })

  input?.addEventListener('input', () => field?.classList.remove('has-error'))
})()
