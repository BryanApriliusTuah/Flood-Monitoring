/*
  Warnings:

  - You are about to drop the column `username` on the `Admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Admin_username_key` ON `Admin`;

-- AlterTable
ALTER TABLE `Admin` DROP COLUMN `username`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `SignUp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SignUp_username_key`(`username`),
    UNIQUE INDEX `SignUp_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Admin_email_key` ON `Admin`(`email`);
