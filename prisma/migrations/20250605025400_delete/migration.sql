/*
  Warnings:

  - You are about to drop the column `Siaga` on the `Level` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SignUp` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `latitude` to the `Elevation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Elevation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_hardwareId_fkey`;

-- AlterTable
ALTER TABLE `Admin` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'admin';

-- AlterTable
ALTER TABLE `Elevation` ADD COLUMN `latitude` VARCHAR(191) NOT NULL,
    ADD COLUMN `longitude` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Level` DROP COLUMN `Siaga`;

-- DropTable
DROP TABLE `Location`;

-- DropTable
DROP TABLE `SignUp`;

-- CreateTable
CREATE TABLE `Signup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `accepted` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Signup_username_key`(`username`),
    UNIQUE INDEX `Signup_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
