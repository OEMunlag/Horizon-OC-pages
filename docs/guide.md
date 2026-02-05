---
title: Getting Started
description: Guide to installing Horizon OC
---

# Getting Started

Getting started is easy, so long as you have a modded Switch with Atmosphere.

**Currently supported Atmosphere version:** `1.10.2`
Please check that your Atmosphere version matches before proceeding.

1. Download **[Horizon-OC GitHub](https://github.com/Horizon-OC/Horizon-OC/releases/)**.
2. Alternatively, we also have nightly builds available through **[GitHub actions](https://github.com/Horizon-OC/Horizon-OC/actions/workflows/build.yml)**. We also plan to add nightly.link support in the future. However, those builds haven't been tested and are unsupported—use them only if you have a specific reason.
3. Once you've downloaded it, the extracted contents are "drag and drop." You can let it overwrite contents on the SD card if prompted.

::: info NOTE
This may overwrite your current version of `sys-clk`. If you must keep your specific version, copy only `atmosphere/kips/hoc.kip` to the SD card in its respective folder. However, rest assured `hoc-clk` has many more features and is the supported version going forward.
:::

::: warning IMPORTANT
Whenever you install HOC, we recommend doing it through **Haze MTP**, **Hekate UMS**, or any **FTP server**. Do not remove the SD card from the slot; frequent removal can harm the reader.
:::

::: tip Custom exosphere
You might have noticed on the root of the folder there's an `exosphere.bin` file. This allows you to perform memory timings on-the-go without a restart. This is optional and it will not affect overclocking capabilities.

To use it, copy it to: `atmosphere/exosphere.bin`
:::

### Configuration

Once the files are moved, open `bootloader/hekate_ipl.ini`. Find the instance you want to run Horizon OC on.

**Example (do not copy and paste this exactly):**
```ini
[Atmosphere EmuNAND]
pkg3=atmosphere/package3
emummcforce=1
icon=bootloader/res/emu_boot.bmp
```

Add the following line to the bottom of your chosen profile:
```ini
kip1=atmosphere/kips/hoc.kip
```

And if you included the **exosphere patch**, add this line as well:
```ini
secmon=atmosphere/exosphere.bin
```

::: tip Safety Instance
You can also make a separate instance to boot without the KIP and exosphere patch. In case an unstable overclock config causes instability, you can boot into this "clean" instance to fix your config.

Example:
```ini
[Atmosphere No-KIP EmuNAND]
pkg3=atmosphere/package3
emummcforce=1
icon=bootloader/res/emu_boot.bmp
```
Note the lack of `kip1` and `secmon`. While `hoc-clk`, the sysmodule, and the overlay will still boot, the overclock configs will **not** be applied.
:::

### Running the Overlay

You're ready to go! After booting, if it succeeded, you can open your overlay (likely **Ultrahand**) generally by pressing <kbd>ZL</kbd> + <kbd>ZR</kbd> + <kbd>D-Pad Down</kbd>.

Depending on your Switch model, refer to the specific configuration guide:

*   **Mariko (V2, Lite, OLED):** [Mariko Config Guide](/mariko)
*   **Erista (2017-2018 Unpatched/Patched):** [Erista Config Guide](/erista)