const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const vets = await prisma.user.findMany({
    where: { role: 'VETERINARIAN' },
    include: { specialistProfile: true }
  });

  console.log(`Found ${vets.length} VETERINARIAN users.`);

  for (const vet of vets) {
    if (!vet.specialistProfile) {
      console.log(`Creating missing profile for ${vet.name} (${vet.email})...`);
      await prisma.specialistProfile.create({
        data: {
          userId: vet.id,
          specialization: "General Veterinarian",
          qualifications: "DVM",
          registrationNo: "PENDING",
          experienceYears: 5,
          consultationFee: 500,
          bio: "I am a certified veterinarian available for consultations."
        }
      });
      console.log(`Profile created!`);
    } else {
      console.log(`${vet.name} already has a profile.`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
