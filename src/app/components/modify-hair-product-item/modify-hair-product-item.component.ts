import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HairProductService } from '../../services/hair-product.service';
import { HairProduct } from '../../models/hair-product';

@Component({
  selector: 'app-modify-hair-product-item',
  templateUrl: './modify-hair-product-item.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrls: ['./modify-hair-product-item.component.css']
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
    this.modifyForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hairProductService.getHairProductById(+id).subscribe(product => {
        if (product) {
          this.hairProduct = product;
          this.modifyForm.patchValue(this.hairProduct);
        }
      });
    }
  }

  onSubmit(): void {
    const formValue: HairProduct = this.modifyForm.value;

    if (formValue.id) {
      this.hairProductService.updateHairProduct(formValue).subscribe(() => {
        this.router.navigate(['/hair']);
      });
    } else {
      const newId = Date.now(); // Unique ID generator (alternative to service method)
      formValue.id = newId;
      this.hairProductService.addHairProduct(formValue).subscribe(() => {
        this.router.navigate(['/hair']);
      });
    }
  }
  onAdd(): void {
    this.onSubmit()
  }
  onUpdate(): void {
    this.onSubmit()
  }
}
