export default function generateToken() {
    let myPassword: string = ''
    let caracters: string = 'QPWOEIRUTYZMXNCBValskdjfhgqpwoeiru123456789*#$%'

    for (let i = 0; i < 10; i++) {
        myPassword += caracters.charAt(
            Math.floor(Math.random() * caracters.length)
        )
    }


    return myPassword
}