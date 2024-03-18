class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  setAccount(accountType) {
    this.accountType = accountType;
  }

  toString() {
    return `[ name = ${this.name},
    address = ${this.address},
    email = ${this.email},
    phone = ${this.phone},
    accountType = ${this.accountType}]`;
  }
}

class Receptionist {
    createBooking() {
        return new RoomBooking();
    }
}

//---------Guest---------//

class Guest extends Person {
    roomBooking = [];
    totalRoomBooking = 0;
    constructor(name, address, email, phone, accountType) {
        super(name, address, email, phone, accountType);
    }

    addRoomBooking(roombooking) {
      this.roomBookings.push(roombooking);
    }
    //ตรวจสอบห้องว่าง
    createBooking(
      reservationNumber, 
      startDate,
      durationDays,
      status, 
      room,
      createBy
      ) {
    //     const isRoomAvailable = this.isRoomAvailable(room, startDate, durationDays);

        if (isRoomAvailable) {
          const booking = new RoomBooking(
            reservationNumber, 
            startDate, 
            durationDays, 
            status, 
            room, 
            createBy
          );

          this.addRoomBooking(booking);
          this.totalRoomBooking++;
            
          return booking;
      } else {
        console.log(room.getRoomnumber() + " is not available ");
      }
    } 
    toString() {
      return `${super.toString()} Total Bookings: ${
        this.totalRoomBookings
      }\n${inbooking}`;
    }
  }


class RoomBooking extends Person {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = null;
  createBy = null;
  room = null;
  constructor(
    reservationNumber,
    startDate,
    durationDays,
    status,
    createBy
  ) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createBy = createBy;
    this.room = room;
  }

  getDetail(reservationNumber) {
    const roomBooking = reservationNumber.createBooking();
    return roomBooking;
  }

  createBooking(reservationNumber, startDate, durationDays, guest, room) {
    const booking = new RoomBooking(
      reservationNumber,
      startDate,
      durationDays,
      guest,
      room
    );
    return booking != null;
  }
  toString() {
    return `RoomBooking: [BookingNumber: ${this.reservationNumber}, Room : ${this.room} Status: ${this.status}\n\t Check in date ${this.startDate} stay for ${this.durationDays} nights booked by: ${this.createdBy}]`;
  }
}

class Notification {
  roomBooking = null
  constructor(notification, createOn, content, sender, recipient) {
    this.notification = notification;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }

  send(sender, content, recipient) {
    const notification = new Notification(sender, content, recipient);
    return notification;
  }

  toString() {
    return `การแจ้งเตือน: ${this.notification}, สร้างเมื่อ: ${this.createOn}, เนื้อหา: ${this.content}, ผู้ส่ง: ${this.sender}, ผู้รับ: ${this.recipient}`;
  }
}

class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
    getRoomnumber() {
      return this.roomNumber;
    }

    isRoomAvailable(roomNumber) {
      return (
        this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE
      );
    }

    createRoom(roomNumber, style, status, price) {
        const room5 = new Room (roomNumber, style, status, price);
        return room != null;
    }

    toString() {
      return `Room [${this.roomNumber}\t${this.style}\t${this.roomPrice}\t${this.status}]`;
    }
}

class Hotel {
    name = "";
    location = "";
    rooms = [];
    constructor(name, location) {
        this.name = name;
        this.location = location   
    }

    getRoom() {
        return this.rooms;
    }

    addnewRoom(room) {
        this.rooms.push(room);
    }

    toString() {
      let inHotel = "";
      for (let i = 0; i < this.rooms.length; i++) {
        inHotel += "/t" + `${this.rooms[i].toString()}` + "\n";
      }
      return `Hotel : ${this.name} ${this.location} \n ${inHotel}`;
    }
}

//Enum
class AccountType {
  static GUEST = ("guest");
  static RECEPTIONIST = ("receptionist");
  constructor(name) {
    this.name = name;
  }
}

class BookingStatus {
  static BOOKED = "booked";
  static NOTBOOKED = "notbooked";
  constructor(name) {
    this.name = name;
  }
}

class RoomStatus {
  static AVAILABLE = "available";
  static DISAVAILABLE = "disavailable";
  static LATECHECKOUT = "latecheckout";
  static EARLYCHECKELN = "earlycheckeln";
  constructor(name) {
    this.name = name;
  }
}

class RoomStyle {
  static DOUBLE_POOL = "Double Bed Pool View";
  static DOUBLE_SEA = "Double Bed Sea View";
  static TWIN_POOL = "Twin Bed Pool View";
  static TWIN_SEA = "Twin Bed Sea View";
  constructor(name) {
    this.name = name;
  }
}

// --------main ------
const main = () => {
  //------ Person------
  const alice = new Guest(
    "Alice",
    "Alice house",
    "Alice@asd.com",
    "0801234567",
    AccountType.GUEST
  );
  const bob = new Guest(
    "Bob",
    "Bob house",
    "Bob@asd.com",
    "0807654321",
    AccountType.GUEST
  );

  const catherine = new Receptionist(
    "Catherine",
    "Catherine house",
    "Catherine@asd.com",
    "0901234567",
    AccountType.RECEPTIONIST
  );
  const devid = new Receptionist(
    "Devid",
    "Devid house",
    "Devid@asd.com",
    "0907654321",
    AccountType.RECEPTIONIST
  );

  //------ Hotel ------
  const hotel = new Hotel("SE Hotel", "NPRU");

  const room1 = new Room(
    "Room1",
    RoomStyle.DOUBLE_POOL,
    RoomStatus.AVAILABLE,
    1000
  );
  const room2 = new Room(
    "Room2",
    RoomStyle.DOUBLE_SEA,
    RoomStatus.AVAILABLE,
    2000
  );
  const room3 = new Room(
    "Room3",
    RoomStyle.TWIN_POOL,
    RoomStatus.AVAILABLE,
    4000
  );
  const room4 = new Room(
    "Room4",
    RoomStyle.TWIN_SEA,
    RoomStatus.AVAILABLE,
    5000
  );

  hotel.addNewRoom(room1);
  hotel.addNewRoom(room2);
  hotel.addNewRoom(room3);
  hotel.addNewRoom(room4);

  bob.createBooking(
    "Booking01",
    "11/03/2567",
    3,
    BookingStatus.BOOKED,
    room2,
    bob.name
  );
  catherine.createBooking(
    alice,
    "Booking02",
    "13/03/2567",
    3,
    BookingStatus.BOOKED,
    room4
  );

    const send1 = new Notification(1,"2024/03/18","Yark Tai Wa",catherine.name,bob.name)

  // console.log(hotel.toString());
  console.log(send1.toString());
  // console.log(alice.toString());
  //  console.log(catherine.toString());
  //   console.log(devid.toString());
  // Tinny :
};
main();
