/*
  Warnings:

  - Added the required column `Destino` to the `Voo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Origem` to the `Voo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voo" ADD COLUMN     "Destino" TEXT NOT NULL,
ADD COLUMN     "Origem" TEXT NOT NULL;
