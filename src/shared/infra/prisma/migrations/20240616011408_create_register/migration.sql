-- CreateTable
CREATE TABLE "Broth" (
    "id" SERIAL NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    CONSTRAINT "Broth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protein" (
    "id" SERIAL NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    CONSTRAINT "Protein_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "brothId" TEXT NOT NULL,
    "proteinId" TEXT NOT NULL,
    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);