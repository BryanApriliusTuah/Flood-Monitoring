-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Elevation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `water_elevation` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hardwareId` INTEGER NOT NULL,

    INDEX `Elevation_hardwareId_fkey`(`hardwareId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hardware` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `longitude` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hardwareId` INTEGER NOT NULL,

    INDEX `Location_hardwareId_fkey`(`hardwareId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Whatsapp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `whatsapp_number` VARCHAR(191) NOT NULL,
    `hardwareId` INTEGER NOT NULL,

    INDEX `Whatsapp_hardwareId_fkey`(`hardwareId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Elevation` ADD CONSTRAINT `Elevation_hardwareId_fkey` FOREIGN KEY (`hardwareId`) REFERENCES `Hardware`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_hardwareId_fkey` FOREIGN KEY (`hardwareId`) REFERENCES `Hardware`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Whatsapp` ADD CONSTRAINT `Whatsapp_hardwareId_fkey` FOREIGN KEY (`hardwareId`) REFERENCES `Hardware`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
