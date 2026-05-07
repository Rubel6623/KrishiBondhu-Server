export interface IAdminStats {
  totalUsers: number;
  totalFarmers: number;
  totalProviders: number;
  totalEquipment: number;
  totalBookings: number;
  totalRevenue: number;
  recentBookings: {
    id: string;
    farmer: { name: string };
    equipment: { title: string };
    totalPrice: number;
    status: string;
    createdAt: Date;
  }[];
  topEquipment: {
    title: string;
    rating: number;
    _count: { bookings: number };
  }[];
}

export interface IProviderStats {
  equipmentCount: number;
  bookingsCount: number;
  totalEarnings: number;
}