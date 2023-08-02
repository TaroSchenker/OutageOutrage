import { IClientStaffData } from "../types/types";

export   const getStaffNameFromId = (staff: IClientStaffData[], id: string) => {
    const staffMember = staff.find((member) => member._id === id);
    return staffMember ? staffMember.name : '';
  };
