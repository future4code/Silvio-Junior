import performPurchase from "../src/functions/PerformPurchase"

test('performPurchase', () => {
    expect(performPurchase({name: 'fulano', balance: 1000}, 500)).toStrictEqual({name: 'fulano', balance: 500})
    expect(performPurchase({name: 'fulano', balance: 500}, 500)).toStrictEqual({name: 'fulano', balance: 0})
    expect(performPurchase({name: 'fulano', balance: 200}, 500)).toStrictEqual(undefined)
})