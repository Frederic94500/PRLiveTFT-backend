import { HttpException } from '@exceptions/httpException';
import { Service } from 'typedi';
import { User } from '@interfaces/user.interface';
import { UserModel } from '@/models/user.model';

@Service()
export class UserService {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = await UserModel.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await UserModel.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    return deleteUserById;
  }
}