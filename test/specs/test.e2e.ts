import { expect } from '@wdio/globals'

context('Button presence test', () => {
    it('should find the button with text QAX', async () => {
        // Localize o botão pelo texto
        const button = $('android=new UiSelector().text("QAX")')

        // Verifique se o botão está presente na tela
        await expect(button).toBeExisting()

        // Clique no botão
        await button.click()
    })
})

