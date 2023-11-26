import { prisma } from "../services/prisma";

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        }
    });
    return user;
}

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        }
    });
    return users;
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        }
    })
    return user;
}

export const updateUser = async (id, data) => {
    try {
        await prisma.user.update({
                where: {
                    id
                },
                data
            });
    } catch (err) {
        console.log(err);
    }
  
    return;
}

export const deleteUser = async (id, data) => {
    const user = await prisma.user.delete({
        where: {
            id
        },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            createdAt: true,
            updatedAt: true,
        },
    });
    return user;
}

export const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

export const receiveDeviceData = async (sensorCheck, userCheck) => {
    try {
      const device = await prisma.device.create({
        data: {
          sensorValue: sensorCheck,
          userId: userCheck,
        },
      });
  
      return device;
    } catch (error) {
      console.error('Prisma error:', error);
      throw error; // Rethrow the error to be caught in the calling function
    }
  }
  

export const retrieveDeviceData = async (data) => {
    const devices = await prisma.device.findMany({
        where: data,
        select: {
            id: false,
            userId: false,
            sensorValue: true,
            createdAt: true,
            updatedAt: false,
        },
    });

    return devices;
}
