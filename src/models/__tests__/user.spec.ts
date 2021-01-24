import User from '../user';

const validate = async (attributes: object) => {
  try {
    await User.create(attributes);
    return true;
  } catch(e) {
    return false
  }
}

describe("Testing User validations", () => {
  test("User's name can't be null", async () => {
    expect(await validate({email: 'a@a.com', password: 'password'})).toBe(false);
  });

  test("User's email can't be null", async () => {
    expect(await validate({name: 'Ahmed', password: 'password'})).toBe(false);
  });

  test("User's email must be unique", async () => {
    await User.init();
    await User.create({name: 'ahmed', email: 'a@a.com', password: 'password'});
    expect(await validate({name: 'anything', email: 'a@a.com', password: 'password'})).toBe(false);
  });

  test("User's password can't be null", async () => {
    expect(await validate({name: 'Ahmed', email: 'a@a.com'})).toBe(false);
  });
});

describe('Testing User CRUD operations', () => {
  test('Get user', async () => {
    const user = await User.create({name: 'ahmed', email: 'a@a.com', password: 'password'});
    const created = await User.findById(user.id);
    expect(created.id).toEqual(user.id);
  });

  test('Get users', async () => {
    const users = [
      {
        name: 'ahmed',
        email: 'a@a.com',
        password: 'password'
      },
      {
        name: 'ahmed',
        email: 'a@a.com',
        password: 'password'
      },
      {
        name: 'ahmed',
        email: 'a@a.com',
        password: 'password'
      },
    ];
    await User.create(users);
    const result = await User.find();
    expect(result).toHaveLength(3);
  });

  test('Create user', async () => {
    const user = await User.create({name: 'omar', email: 'omar@example.com', password: 'password'});
    const created = await User.findById(user.id);
    expect(created.id).toEqual(user.id);
  });

  test('Update user', async () => {
    const user = await User.create({name: 'ahmed', email: 'ahmed@example.com', password: 'password'});
    const updated = await User.findOneAndUpdate({_id: user.id}, {name: 'omar', password: 'hello world'}, {new: true});
    expect(updated.name).toEqual('omar');
    expect(updated.password).toEqual('hello world');
  })
});
