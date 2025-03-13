import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HairProductService } from '../../services/hair-product.service';
import { HairProduct } from '../../models/hair-product';
import { CommonModule } from '@angular/common';  // Import CommonModule instead of NgIf

@Component({
  selector: 'app-modify-hair-product-item',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Use CommonModule
  styleUrls: ['./modify-hair-product-item.component.css'],
  templateUrl: './modify-hair-product-item.component.html'
})
export class ModifyHairProductItemComponent implements OnInit {
  modifyForm!: FormGroup;
  hairProduct: HairProduct | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hairProductService: HairProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with validation for the required fields
    this.modifyForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      isOrganic: [false],
      description: [''],
      imageUrl: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hairProductService.getHairProductById(+id).subscribe(product => {
        if (product) {
          this.hairProduct = product;
          this.modifyForm.patchValue(this.hairProduct); // Populate form fields with existing data
        } else {
          // If product not found, navigate back to the list
          this.router.navigate(['/hair']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.modifyForm.invalid) {
      return; // Stop submission if the form is invalid
    }

    const formValue: HairProduct = this.modifyForm.value;

    if (formValue.id) {
      // Update the existing product
      this.hairProductService.updateHairProduct(formValue).subscribe(() => {
        this.router.navigate(['/hair']); // Navigate to the product list after update
      });
    } else {
      // Add a new product (with a unique ID)
      const newId = Date.now(); // Generating a unique ID for the new product
      formValue.id = newId;
      this.hairProductService.addHairProduct(formValue).subscribe(() => {
        this.router.navigate(['/hair']); // Navigate to the product list after addition
      });
    }
  }

  onAdd(): void {
    this.onSubmit(); // Reuse the submit logic for adding a product
  }

  onUpdate(): void {
    this.onSubmit(); // Reuse the submit logic for updating a product
  }
}
