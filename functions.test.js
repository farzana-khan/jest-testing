const functions = require('./functions');

//beforeEach(() => initDatabase());
//afterEach(() => closeDatabase());

/*beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database closed');*/
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names',() => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
});


describe('Checking Names',() => {
    beforeEach(() => nameCheck());

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test('Adds 2 + 2 is NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//check for truthy and falsy values
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be Brad Traversy Object', () => {
    expect(functions.createUser()).toEqual({ 
        firstname: 'Brad', 
        lastname: 'Traversy'
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('Theere is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

//Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});