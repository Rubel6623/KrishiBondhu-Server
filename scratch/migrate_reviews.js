require("dotenv").config();
const { PrismaClient } = require('../src/generated/prisma');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function migrate() {
  console.log('🔄 Starting Review Migration...');
  
  const reviews = await prisma.review.findMany({
    where: {
      providerId: null
    },
    include: {
      equipment: true
    }
  });

  console.log(`🔍 Found ${reviews.length} reviews without providerId`);

  for (const review of reviews) {
    if (review.equipment) {
      await prisma.review.update({
        where: { id: review.id },
        data: {
          providerId: review.equipment.providerId
        }
      });
      console.log(`✅ Updated review ${review.id} with providerId: ${review.equipment.providerId}`);
    }
  }

  console.log('✨ Migration complete!');
}

migrate()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
