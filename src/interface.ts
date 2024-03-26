enum Role {
  Doctor,
  Anestesista,
  Asistente,
  Administrativo,
}

interface Staff {
  name: string;
  email: string;
  role: Role;
}

interface Billable {
  total: number;
  currentBilling(): string;
}

const medico = {
  name: "martin",
  email: "daniel@test.com",
  role: Role.Doctor,
  total: 25,
  currentBilling(){
    return `el valor total de la factura es de  ${this.total}`; 
  }
};

const printStaff = (staff: Staff) => {
  console.log(staff);
};

const printCurrentBill = (bill: Billable) => {
  console.log(bill.currentBilling());
};

printStaff(medico);
printCurrentBill(medico);
